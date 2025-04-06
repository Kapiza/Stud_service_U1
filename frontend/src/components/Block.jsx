import React from 'react';

const Block = (props) => {
    return (
        <div className={`Block ${props.class}`} >
            <p className="level_2">Теория</p>
            <ol className="list_class">
                <div className="class">
                    <p>Лабораторная  1</p>
                    <img src="doc_icon.svg" alt="icon" className="doc-SVG"  />
                    {/*<img src="Icon.svg" alt="icon" className="SVG-icon"  />*/}

                </div>

                <div className="class">
                    <p>Лабораторная  1</p>
                    <img src="doc_icon.svg" alt="icon" className="doc-SVG"  />
                    {/*<img src="Icon.svg" alt="icon" className="SVG-icon"  />*/}

                </div>
                <div className="class">
                    <p>Лабораторная  1</p>
                    {/*<img src="doc_icon.svg" alt="icon" className="doc-SVG"  />*/}
                    {/*<img src="Icon.svg" alt="icon" className="SVG-icon"  />*/}

                </div>
            </ol>
        </div>
    );
};

export default Block;