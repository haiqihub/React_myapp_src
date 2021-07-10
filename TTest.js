import React from 'react';
import axios from 'axios'
class Test extends React.Component {

    constructor(props) { //构造函数
        super(props);
        this.state = {
            Data: []
        }
    }

    getData() {
        //let formData = new FormData();
        //formData.append('id', '1751924');

        fetch('http://192.168.43.221:49418/api/show_collection', {
            method: 'POST',
            credentials: 'include',
            headers: { // 请求头（可以是Headers对象，也可是JSON对象）
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({'user_id':'1751924'}),
            mode: "cors"
        }).then(res => res.json()).then(data => {
            console.log(data)
            this.setState({Data: data.posts})

        }).catch(e => console.log('错误2:', e)) ///出错
    }

    componentWillMount() {
        this.getData();

    }

    render() {
       const { Data } = this.state;
       //let Data = [{title : 'aaa'}]

        return (<div>
            {
                Array.isArray(Data)&&Data.map((item, index) =><div key={index}>{item.title}</div>)
            }
        </div>);
    }
}

export default Test;
