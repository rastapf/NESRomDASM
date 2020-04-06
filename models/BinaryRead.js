function BinaryToStringArray (binary, header) {
    const rows = (binary.length / 16);
    const maxHeaderLength = rows.toString(16).length + 1;
    const rowSize = header.length - 1;
    let headeredArray = header;

    binary.forEach((byte, index) => {
        let curByte = byte.toString(16).toUpperCase();
        let newValue = [];

        if((index % rowSize) == 0) {
            let headerIndex = index.toString(16).toUpperCase();

            if(headerIndex.length < maxHeaderLength) {
                const leadingZeroes = maxHeaderLength - headerIndex.length;

                headerIndex = '0'.repeat(leadingZeroes) + headerIndex;
            };

            newValue.push(headerIndex);
        };

        if(curByte.length < 2) {
            const leadingZeroes = 2 - curByte.length;

            curByte = '0'.repeat(leadingZeroes) + curByte;
        };

        newValue.push(curByte);
        return headeredArray.push.apply(headeredArray, newValue);
    });
    
    return headeredArray;
};

module.exports = {BinaryToStringArray};