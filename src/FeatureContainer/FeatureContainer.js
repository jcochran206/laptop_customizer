import React from 'react';
import '../App.css';
import FeatureList from './FeatureList';

function FeatureContainer(props){

    return (
        <section className='main_form'>
            <h3>Specs and Customizations</h3>
            <FeatureList 
            features={props.features}
            handleUpate={props.handleUpate}
            selected={props.selected}
            />
        </section>
    )
}
export default FeatureContainer;