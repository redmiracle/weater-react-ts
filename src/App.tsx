import Info from "./components/Info.tsx";
import Data from "./components/Data.tsx";
import "./App.css"

const App = () => {

    return (
        <div>
            <div className={'wrapper'}>
                <div className={'main'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-sm-5 info'}>
                                <Info/>
                            </div>
                            <div className={'col-sm-7 form'}>
                                <Data/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default App;
