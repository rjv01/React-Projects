import React, { useEffect, useState } from 'react'
import { items } from './items';

export default function MultiFilter() {

    let filters = ["Bags", "Watches", "Sports", "Sunglasses"];
    const [filterSelected, setFilterSelected] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);

    const handleSelectFilter = (categoryFilter) => {
        if (filterSelected.includes(categoryFilter)) {
            const updatedFilters = filterSelected.filter(el => el !== categoryFilter);
            setFilterSelected(updatedFilters);
        } else {
            setFilterSelected([...filterSelected, categoryFilter]);
        }
    }

    useEffect(() => {
        filterItems();
    }, [filterSelected]);

    const filterItems = () => {
        if (filterSelected.length > 0) {
            let tempItems = filterSelected.map((selectedCategory) => {
                let temp = items.filter((item) => item.category === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...items]);
        }
    }

    return (
        <div className='min-h-screen bgGrid p-6 flex flex-col items-center'>
            <h1 className='text-3xl font-bold mb-6'>MultiFilter Feature</h1>

            <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelectFilter(filter)}
                        className={`px-5 py-2 rounded-full font-semibold border-2 ${
                            filterSelected.includes(filter)
                                ? 'bg-blue-500 text-white border-blue-700'
                                : 'bg-white text-gray-700 border-gray-400 hover:bg-gray-100'
                        } transition-all duration-200`}
                    >
                        {filter}
                    </button>
                ))}
                <button
                    className='px-5 py-2 rounded-full font-semibold border-2 bg-red-500 text-white hover:bg-red-600 transition-all duration-200'
                    onClick={() => {
                        setFilteredItems(items);
                        setFilterSelected([]);
                    }}
                >
                    Reset
                </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-4 max-w-6xl'>
                {filteredItems.map((item, index) => (
                    <div
                        key={index}
                        className='bg-white border border-gray-300 rounded-lg shadow-md p-4 text-center'
                    >
                        <p className='text-lg font-medium'>{item.name}</p>
                        <p className='text-sm text-gray-500'>{item.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
