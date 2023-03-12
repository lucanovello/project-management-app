import loadingComponentStyle from './LoadingComponent.module.css';

function LoadingComponent(props) {
    const { text } = props;

    return (
        <div className={loadingComponentStyle.loadingComponentContainer}>
            <div className={loadingComponentStyle.loadingComponentWrapper}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={loadingComponentStyle.loadingComponentText}>
                {text ? text : 'Loading'}
            </div>
        </div>
    );
}

export default LoadingComponent;
