class TodoService {

    base_url = "http://localhost:8080/";

    constructor(httpClient)
    {
        this.httpClient = httpClient;
    }

    async getService()
    {
        try 
        {
            const response = await this.httpClient.get(`${this.base_url}users`);    
            response.json();
        } catch (error) {
            throw error
        }
    }

    async createService(data)
    {
        try 
        {
            const response = await this.httpClient.post(`${this.base_url}users`, data);    
            response.json();
        } catch (error) {
            throw error
        }        
    }

    async getServiceById(id)
    {
        try 
        {
            const response = await this.httpClient.getById(`${this.base_url}users`, id);    
            response.json();
        } catch (error) {
            throw error
        }        
    }

    async deleteServiceById(id)
    {
        try 
        {
            const response = await this.httpClient.delete(`${this.base_url}users`, id);    
            response.json();
        } catch (error) {
            throw error
        }        
    }

    async updateServiceById(data)
    {
        try 
        {
            const response = await this.httpClient.update(`${this.base_url}users`, data);    
            response.json();
        } catch (error) {
            throw error
        }        
    }

}

export default TodoService;