/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';

export default function ShowHide({childSetShowIt, childShowIt}) {

return(
    <div>
        <button onClick={() => childSetShowIt(prev => !prev)}>{childShowIt ? "Hide" : "Show"}</button>
    </div>
)
}


// ShowHide.propTypes = {
//     childSetShowIt: PropTypes.func.isRequired,
//     childShowIt: PropTypes.bool.isRequired,
// };