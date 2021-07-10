import React from 'react';
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.43.221:49418'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8';


class Test extends React.Component {

    constructor(props) { //构造函数
        super(props);
        this.state = {
            Data: []
        }
    }

    getData() {
        const Data=new URLSearchParams();
        Data.append('user_id',1751924);
        axios({
         method:'post',
         url:'/api/show_collection',
         data: Data

        }).then(
       res=>console.log (res.data)
        )
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
