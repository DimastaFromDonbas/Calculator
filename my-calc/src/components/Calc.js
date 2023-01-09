import { useInsertionEffect, useState } from "react";

function Calc() {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')
    const [symbol, setSymbol] = useState('')

    function getValue(e) {
        if(value === '' && e.target.name === '0') {
            return
        }
        setValue(value + e.target.name)
        console.log(value)
    }

    function removeValue() {
        setValue('')
    }

    function delitValue(){
        if(value.length === 1) {
            setValue('')
        }else {
            setValue(value.substring(0,value.length - 1))
            console.log(value)
        }

    }

    function handleMath(e) {
        if(e.target.name === '=') {
            switch(symbol) {
                case '÷':
                    setValue(count/value)
                    break;
                case '×':
                    setValue(count*value)
                    break;
                case '−':
                    setValue(count-value)
                    break;
                case '+':
                    setValue(Number(count)+Number(value))
                    break;
            }
        }else {
            setCount(value)
            setValue('')
            setSymbol(e.target.name)
        }
 
    }

    return <>
           
    <div className="wrapper">
        <section className="screen">
            {value === ''? 0 : value}
        </section>

        <section className="calc-buttons">

            <div className="calc-button-row">
                <button name="C" onClick={removeValue} className="calc-button double">
                    C
                </button>
                <button onClick={delitValue} className="calc-button ">
                    ←
                </button>
                <button name="÷" onClick={handleMath} className="calc-button ">
                    ÷
                </button>
            </div>

            <div className="calc-button-row">
                <button name="7" onClick={getValue} className="calc-button">
                    7
                </button>
                <button name="8" onClick={getValue} className="calc-button">
                    8
                </button>
                <button name="9" onClick={getValue} className="calc-button">
                    9
                </button> 
                <button name="×" onClick={handleMath} className="calc-button">
                    ×
                </button>
            </div>

            <div className="calc-button-row">
                <button name="4" onClick={getValue} className="calc-button">
                    4
                </button>
                <button name="5" onClick={getValue} className="calc-button">
                    5
                </button>
                <button name="6" onClick={getValue} className="calc-button">
                    6
                </button>
                <button name="−" onClick={handleMath} className="calc-button">
                    −
                </button>
            </div>

            <div className="calc-button-row">
                <button name="1" onClick={getValue} className="calc-button">
                    1
                </button>
                <button name="2" onClick={getValue} className="calc-button">
                    2
                </button>
                <button name="3" onClick={getValue} className="calc-button">
                    3
                </button>
                <button name="+" onClick={handleMath} className="calc-button">
                    +
                </button>
            </div>

            <div className="calc-button-row">
                <button name="0" onClick={getValue} className="calc-button triple">
                    0
                </button>
                <button name="=" onClick={handleMath} className="calc-button">
                    =
                </button>
            </div>

        </section>
    </div>
    </>
}

export default Calc;