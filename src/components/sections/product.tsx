import React, { useEffect, useState } from 'react';
import { getCharacters, singleCharacter } from '../../services/character';
import SearchBox from '../common/searchBox';
import { faker } from '@faker-js/faker';

interface Character {
    name: string;
    culture: string;
    gender: string,
    aliases: string[],
    books: string[],
}

const ProductList = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [character, setCharacter] = useState<Character>();
    const [query, setQuery] = useState<string>('');
    const [types, setTypes] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)

    /** Function to accept inputs to use while Filtering */
    const handleSearch = (query: string) => {
        setQuery(query);
    }

    /** Function to Populate All Characters from API */
    const populateCharacter = async () => {
        setLoading(true)
        const {data} = await getCharacters();
        setCharacters(data);
        setLoading(false)
    }

    /** Function to Call the Single Character Selected by User */
    const handleCharacter = async (value: number) => {
        const {data} = await singleCharacter(value);
        setCharacter(data);
    }

    /** Dependency to Call the Get Characters on App Start */
    useEffect(() => {
        populateCharacter();
    }, []);
    
    /** Function to Handle Filtering Depending on User Needs */
    const getData = () => {
        let filters = characters;
        
        if(query)
            filters = characters.filter(user => 
                user.name.toLowerCase().startsWith(query.toLowerCase())  
            )
        else if(types && types == 'name')
            filters = characters.filter(user => 
                user.name !== ''  
            )
        else if(types && types == 'premium')
            filters = characters.filter(user => 
                user.culture !== ''  
            )
        else if(types && types == 'free')
            filters = characters.filter(user => 
                user.culture === ''  
            )
    
        return { totalCount: filters.length, data: filters }
      }

    return (
        <>
            <div className="container px-3 pt-5">
                <h2 className="text-center text-white pb-3">POPULAR STOCK AVAILABLE!</h2>
                <p className='text-center text-muted'>High quality of actors with worry-free licensing <br /> for personal usage.</p>
                <div className="mx-md-5 px-5">
                    <SearchBox value={query} changeHandler={handleSearch} />
                </div>
                <ul className="nav mt-5">
                    <li className="nav-item" onClick={() => setTypes('')}>
                        <a className="nav-link text-white">
                            <b>latest&nbsp;<sup><small className='pa-1 bg-danger rounded-circle' /></sup></b>
                        </a>
                    </li>
                    <li className="nav-item" onClick={() => setTypes('name')}>
                        <a className="nav-link text-white">Popular</a>
                    </li>
                    <li className='nav-item pt-2'>
                        <small className='border py-1' />
                    </li>
                    <li className="nav-item" onClick={() => setTypes('premium')}>
                        <a className="nav-link text-warning">Premium</a>
                    </li>
                    <li className="nav-item" onClick={() => setTypes('free')}>
                        <a className="nav-link text-primary">Free</a>
                    </li>
                </ul>
                <div className="row my-5">
                    {!loading ? getData().data.map((item, key) => (
                        <div key={key} className="col-md-4 my-2">
                            <div className="card border-0 bg-primary-dark nav-item" onClick={() => handleCharacter(key + 1)} data-toggle="modal" data-target="#exampleModal">
                                <div className="card-body m-2 bg-primary-light py-0 px-2">
                                    <div className="float-right">
                                        <small className='font-weight-bold text-smaller'><i className={`fa ${item.culture ? 'fa-lock' : 'fa-unlock'}`} /> {item.culture ? 'Premium' : 'Free'}</small>
                                    </div>
                                    <div className="text-center my-4">
                                        <img src={faker.image.avatar()} className="rounded" width={190} height={200} alt="" />
                                    </div>
                                </div>
                                <div className="card-footer border-0 py-0">
                                    <h5 className='text-white'>{item.name ? item.name : 'No Name'}</h5>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className='col-md-6 offset-md-6'>
                            <h4 className='text-white my-4'>Loading ....</h4>
                        </div>
                    )}
                </div>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{height: '100%'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h4 className="modal-title text-white" id="exampleModalLabel">{character?.name || 'No Name'}</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className='text-danger' aria-hidden="true" style={{opacity: 1}}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={faker.image.avatar()} className="rounded mb-3" width={320} height={240} alt="" />
                            <h6 className='my-3 text-white'>Culture: <b> {character?.culture || 'No Culture'}</b></h6>
                            <h6 className='my-3 text-white'>Gender: <b> {character?.gender || 'NO Gender'}</b></h6>
                            <h6 className='mt-4 text-white'>Aliases:</h6>
                            {(character?.aliases && character?.aliases.length >= 1) ? (
                                character.aliases.map((item, i) => (
                                    <span key={i}><small className='text-muted'>- {item}</small></span>
                                ))
                            ): (
                                <h6>No Aliases Available</h6>
                            )}
                            <h6 className='mt-3 text-white'>Books:</h6>
                            {(character?.books && character?.books.length >= 1) ? (
                                character.books.map((item, i) => (
                                    <span key={i}><small className='text-muted'>- {item}</small></span>
                                ))
                            ): (
                                <h6>No Books Available</h6>
                            )}
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;