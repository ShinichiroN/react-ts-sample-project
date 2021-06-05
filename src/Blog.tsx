import React from 'react';
import Article from './Article';

class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isPublished: true
        };
    }
    render() {
        const str='str';
        return (
            <>
                <div>
                    <Article
                        title={"eeee"}
                        text={str}
                        isPublished={ this.state.isPublished}
                    />
                </div>
                {/* <div>
                    <Article
                        title={"aho"}
                        text={str}
                    />
                </div> */}
            </>
        )
    }
}

export default Blog;