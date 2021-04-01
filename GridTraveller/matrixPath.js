const matrixPath = (strArr) => {
    let m = strArr.map(el => el
        .split('')
    );
    let current = m[0][0];
    let bottom = strArr.length - 1;
    let right = m[0].length-1;
    let last = m[bottom][right];
    let top = 0;
    let left=0;
    let count = 0;
    let count2 = 0;
    let current1 = 0;
    let current2 = 0;
    let i = 0;
    let j=0;
    let k=0;
    let l = 0;
    while (i<m.length) {
        while (j<m[0].length) {
            if (count > 1) {
                return 'not possible';
            }
            if (m[i][j] === '1') {
                current1 = i;
                current2 = j;
            } else if (count===0) {
                m[i][j] = "1";
                count++;
            }
            else{
                i++;
                j--;
            }

            j++;

        }
        i++;
        j--;

    }
    console.log(i-1,j);
    while (k<m.length) {
        while (l<m[0].length) {
            if (count2 > 1) {
                return 'not possible';
            }
            if (m[k][l] === '1') {
                current1 = k;
                current2 = l;
            } else if (count2===0) {
                m[k][l] = "1";
                count2++;
            }
            else{
                k++;
                l--;
            }

            l++;

        }
        i++;
        j--;

    }

    /* while (current1 !== m[0].length-1 && current2 !== strArr.length - 1) {
         /!*for (let i = top; i <= right; i++) {
             if (m[top][i] === "1") {
                 current1 = top;
                 current2 = i;
                 current = m[current1][current2];
                 continue;
             }


         }*!/
         for (let i = 0; i < m[0].length ; i++) {
             for (let j = 0; j < m.length; j++) {
                 console.log(m[i][j]);
             }
         }
         /!*top++;
         for (let j = top; j <= bottom; j++) {
             if (m[]) {
             }
         }*!/

         break;
     }*/
    // console.log(current1, current2);
};
matrixPath(["11100", "10011", "10101", "10011"]);