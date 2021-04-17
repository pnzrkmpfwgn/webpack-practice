import _ from 'lodash';
import Print from './print';

function component(){
    const element = document.createElement('div');

    //Lodash, now imported by this script
    element.innerHTML = _.join(['Hello','Webpack'],' ');
    element.onclick = Print.bind(null, 'Hello Webpack');

    return element
        
}

document.body.appendChild(component());