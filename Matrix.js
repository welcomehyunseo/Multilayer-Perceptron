class Matrix {
    constructor(number_ofRows, number_ofColumns) {
        this.number_ofRows = number_ofRows;
        this.number_ofColumns = number_ofColumns;
        this.matrix = this.create_matrix(number_ofRows, number_ofColumns);
    }

    //Create the rows by columns matrix and fill the zero
    create_matrix(number_ofRows, number_ofColumns) {
        let matrix = [];
        for (let row = 0; row < number_ofRows; row++) {
            matrix[row] = [];
            for (let column = 0; column < number_ofColumns; column++) {
                matrix[row][column] = 0;
            }
        }
        return matrix;
    }

    print() {
        console.table(this.matrix);
    }

    //Put the value randomly.
    put_randomize(min, max) {
        if (typeof (min) !== "number" || typeof (max) !== "number") {
            console.error('Please write the parameter in this put_random function...');
            return;
        }
        for (let row = 0; row < this.number_ofRows; row++) {
            for (let column = 0; column < this.number_ofColumns; column++) {
                this.matrix[row][column] = Math.random() * (max - min) + min;
            }
        }
    }

    //Put the value randomly. It's set to integer
    put_randomize_integer(min, max) {
        for (let row = 0; row < this.number_ofRows; row++) {
            for (let column = 0; column < this.number_ofColumns; column++) {
                this.matrix[row][column] =
                    Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }
    }

    //It's adding scalar n or matrix n
    add(n) {
        if (n instanceof Matrix) {

        } else {
            for (let row = 0; row < this.number_ofRows; row++) {
                for (let column = 0; column < this.number_ofColumns; column++) {
                    this.matrix[row][column] += n;
                }
            }
        }
    }

    fill_number(n) {
        for (let row = 0; row < this.number_ofRows; row++) {
            for (let column = 0; column < this.number_ofColumns; column++) {
                this.matrix[row][column] = n;
            }
        }
    }

    //It's only multiplying scalar n
    multiply_number(n) {
        for (let row = 0; row < this.number_ofRows; row++) {
            for (let column = 0; column < this.number_ofColumns; column++) {
                this.matrix[row][column] *= n;
            }
        }
    }

    //return C about A * B
    return_product(b) {
        /*
            The current matrix is m by n matrix. 
            The matrix b is n by p matrix.
            It's must be same n of current matrix A and n of matrix b.
            C = AB then this = C
        */
        const A_matrix = this.matrix;
        const B_matrix = b.matrix;

        //Debuging
        //console.table(A_matrix);console.table(B_matrix);

        //Checking
        if (A_matrix.number_ofColumns !== B_matrix.number_ofRows) {
            console.error("It's must be same the number of columns in current matrix and the number of rows in parameter matrix typed in your hand.")
            return;
        }

        //Define the value.
        const m = A_matrix.length;  //the number of rows in A_matrix
        const n = A_matrix[0].length; //(===B_matrix.number_ofRows)
        const p = B_matrix[0].length;  //the number of columns in B_matrix

        let C_matrix = this.create_matrix(m, p);

        //Debuging about C
        //console.log(m, n, p);

        for (let m_ = 0; m_ < m; m_++) {
            for (let p_ = 0; p_ < p; p_++) {
                let sum = 0;
                for (let n_ = 0; n_ < n; n_++) {
                    sum += A_matrix[m_][n_] * B_matrix[n_][p_];
                }
                C_matrix[m_][p_] = sum;
            }
        }

        //Debuging about C after calculating
        //console.table(C_matrix);

        return C_matrix;
    }
}