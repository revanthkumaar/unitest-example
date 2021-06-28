import React from 'react';
import Enzyme, {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Account from './account-component';
import toJson from 'enzyme-to-json'


configure({adapter: new Adapter})


const user = {
  name: 'revanth',
  email: 'example.com',
  username: 'revdd'
}

describe("testing the render of account component", () => {

/*
      it("accepts user account props", ()=> {
      const wrapper = mount(<Account profile={user}/>);
      expect(wrapper.props().profile).toEqual(user);
    });


    it("contains users account email", () => {
      const wrapper = mount(<Account profile={user}/>);
      const email = wrapper.find("p").text()
      expect(email).toEqual("example.com")
    })
*/
    //snapshot test case:

    it('acccount comp renders correctly', () => {
        const tree = shallow(<Account/>);
        expect(toJson(tree)).toMatchSnapshot();
    })


})



