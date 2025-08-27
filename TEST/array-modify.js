const [data, setData] = useState([1, 2, 3]);
const newItem = 4;
// newItem ek single value ho (e.g. string, number, object, etc.)
setData([...data, newItem]);
// Result: [1, 2, 3, 4]
//////////////////////////////////////////////////////////////////

const [data2, setData2] = useState([1, 2, 3]);
const newItem2 = [4, 5];
// newItem khud bhi array ho
setData2([...data2, ...newItem2]); // agar sirf ak bar dalna hai to thik hai.
// Result: [1, 2, 3, 4, 5]
/////////////////////////////////////////////////////////////////

setData2((prev) => [...prev, ...newItem2]); // agar multiple time setData2 ak sath call karte ho to best hota hai always safe.
/////////////////////////////////////////////////////////////////

let invoiceListArray = [...data];
// invoiceListArray me data ko daal raha hai pura, fir chahe data jnha se aye vo vhi data dalega.
