import React from 'react';
import PropTypes from 'prop-types';

type Props = {
    value: string;
    changeHandler?: any
};

const SearchBox = ({value, changeHandler}: Props) => {
    return (
        <div className="container px-md-5 mx-md-5">
            <div className="input-group mb-3 px-md-5 mr-md-5 mt-5">
                {/* <div className="input-group-prepend">
                    <div className="input-group-text px-2 bg-input border-0">
                        <div className="dropdown">
                            <button className="btn btn-light btn-sm py-0 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                <small>vector 1</small>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <input type="text" className="form-control bg-input border-0 py-3" placeholder='Search actors here...' value={value} onChange={(e) => changeHandler(e.currentTarget.value)} />
                <div className="input-group-append">
                    <span className="input-group-text bg-input border-0">
                        <i className='fa fa-search text-danger' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;