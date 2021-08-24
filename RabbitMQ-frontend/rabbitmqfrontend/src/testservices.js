import axios from 'axios';

const TEST_API_BASE_URL= "http://localhost:8080/order/${restroName}";

class testsrvices{
    
    create(test){
        return axios.post(TEST_API_BASE_URL,test);
    }
   
}
export default new testsrvices()