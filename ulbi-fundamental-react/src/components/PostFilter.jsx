import React from 'react';
import Input from "./UI/Input";
import Select from "./UI/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                placeholder="Search"
                value={filter.searchQuery}
                onChange={e => setFilter(prev => {
                    return { ...prev, searchQuery: e.target.value }
                })}
            />
            <Select
                defaultValue="Sort by"
                options={[
                    {value: 'name', name: 'Name'},
                    {value: 'description', name: 'Description'},
                ]}
                value={filter.selectedSort}
                onChange={sort => setFilter(prev => {
                    return { ...prev, selectedSort: sort }
                })}
            />
        </div>
    );
};

export default PostFilter;