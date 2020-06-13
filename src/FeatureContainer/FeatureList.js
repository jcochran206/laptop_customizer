import React from 'react';
import FeatureItem from './FeatureItem';

function FeatureList(props) {
    //console.log('outside maps', props)
    const features = Object.keys(props.features.features).map(key => {
        //console.log('first map', props.handleUpdate)
        const options = props.features.features[key].map((item, index) => {
            //console.log('second map', props.handleUpdate)
            const selectedClass = item.name === props.features.features[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (

                <FeatureItem
                    item={item}
                    key={item.name}
                    features={key}
                    handleUpdate={props.handleUpdate}
                    featureClass={featureClass}
                    />
            )
        });

        return (
            <div className='feature' key={key}>
                <legend className='feature__name'>
                    <h3>{key}</h3>
                </legend>
                {options}
            </div>
        )
    });
    return features
}
export default FeatureList;