import React, { useState } from 'react';
import SelectComponent from 'components/SelectComponent';
import ResultsItemComponent from 'components/ResultsItemComponent';
import useOptions from 'hooks/useOptions';

import { Container, Results } from './style';

const HomeContainer = () => {
    const [value, setValue] = useState('');
    const [listOfCities, setListOfCities] = useState([]);

    const options = useOptions(value);

    return (
        <Container>
            <SelectComponent
                value={value}
                handleSetValue={setValue}
                setListOfCities={setListOfCities}
                options={options}
            />
            <Results>
                {listOfCities.map((cityName) => (
                    <ResultsItemComponent key={cityName}>
                        {cityName}
                    </ResultsItemComponent>
                ))}
            </Results>
        </Container>
    );
};

export default HomeContainer;
