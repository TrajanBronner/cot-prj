import React, {useState} from 'react';

type LocalProps = {
    onNewSearch: (searchedValue: string) => void
    onReset: () => void
    title: string
}

const SearchInput: React.FunctionComponent<LocalProps> = (props) => {

    const [searchedValue, setSearchedValue] = useState('');

    const updateSearch = (newSearch: string) => {
        setSearchedValue(newSearch);
        props.onNewSearch(newSearch);
    };

    const resetSearch = () => {
        setSearchedValue('');
        props.onReset();
    };

    return (
        <div className={'m'}>

            <span className={'m'}>{props.title || 'Search'}</span>

            <input type='text'
                   className={'m'}
                   value={searchedValue}
                   onChange={(event) => updateSearch(event.target.value)}/>

            {searchedValue && <button className={'m'} onClick={resetSearch}>Reset</button>}
        </div>
    );
};

export default SearchInput;