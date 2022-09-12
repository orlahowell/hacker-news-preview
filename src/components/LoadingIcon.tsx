import "../scss/LoadingIcon.scss";

const LoadingIcon = () => {
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default LoadingIcon;
