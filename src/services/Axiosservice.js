import Axios from 'axios';

class Axiosservice{
    postMeth(url, data, header=false){
        return Axios.post(url, data, header)
    }
    getMeth(url,header=false){
        return Axios.get(url,header);
    }

    putMeth(url,data,header=false){
        return Axios.put(url,data,header);
    }

    deleteMeth(url,header=false){
        return Axios.delete(url, header);

    }
}


export default Axiosservice;