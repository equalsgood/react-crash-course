import axios from "axios";
import { createRef } from "react";

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data.map(post => {
            const { userId, id, title, body } = post;
            return { id, userId, name: title, description: body, nodeRef: createRef() };
        });
    }
}