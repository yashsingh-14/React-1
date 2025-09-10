import { useState } from "react"
import "./Currency.css"

export function Currency() {
    const [form_data, setForm_data] = useState('USD')
    const [to_data, setTo_data] = useState('INR')
    const [amount, setAmount] = useState(1)
    const [result, setResult] = useState('')
    

    const convert =async ()=> {
        const from_data = document.form.from.value;
        const to_data = document.form.to.value;
        const amount = document.form.amount.value;


        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from_data}`);
        const data = await response.json();

        const rate = data.rates[to_data];
        const new_amount = (rate * amount).toFixed(2);
        setResult(`${amount} ${from_data} = ${new_amount} ${to_data}`)
    } 
    
    return <>
        <div class="main">
            <h1>Currency Converter</h1>
            <form name="form" >
                <input type="number" name="amount" value={amount} min="0" onChange={(e) => { setAmount(e.target.value) }}/>
                <select name="from" value={form_data} onChange={(e) => { setForm_data(e.target.value) }}>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="AED">AED</option>
                </select>
                <select name="to" value={to_data} onChange={(e) => { setTo_data(e.target.value) }}>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="AED">AED</option>
                </select>
                <input type="button" value="Convert" onClick={convert} />
            </form>
            <h1 id="result">{ result}</h1>
        </div>
    </>
}