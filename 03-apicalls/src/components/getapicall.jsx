import axios from 'axios';
function GetApiCall() {


    axios.get('https://api.restful-api.dev/objects')
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => console.log(error));

    return (
        <>
            <h1>Get API Call Example</h1>
        </>
    );
}
export default GetApiCall;