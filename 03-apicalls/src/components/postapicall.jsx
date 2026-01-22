import axios from 'axios';
import { useState } from 'react';

function PostApiCall({text}) {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [cpuModel, setCpuModel] = useState('');
    const [hardDiskSize, setHardDiskSize] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        const postData = {
            name,
            data: {
                year,
                price,
                "CPU model": cpuModel,
                "Hard disk size": hardDiskSize
            }
        };
        try {
            const res = await axios.post('https://api.restful-api.dev/objects', postData);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setResponse(null);
        }
    };
    console.log(text);

    return (
        <div style={{ background: '#181818', color: '#f1f1f1', minHeight: '100vh', padding: '2rem' }}>
            <h2>Post Data to API</h2>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="txt" /><br /><br />
            <input type="text" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} className="txt" /><br /><br />
            <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="txt" /><br /><br />
            <input type="text" placeholder="CPU Model" value={cpuModel} onChange={e => setCpuModel(e.target.value)} className="txt" /><br /><br />
            <input type="text" placeholder="Hard Disk Size" value={hardDiskSize} onChange={e => setHardDiskSize(e.target.value)} className="txt" /><br /><br />
            <button onClick={handleSubmit}>Send to API</button>
            {response && (
                <div style={{ marginTop: '2rem' }}>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        </div>
    );
}
export default PostApiCall;
