import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Account from './account.component';

const user = {
  name: 'revanth',
  email: 'example.com',
  username: 'revdd'
}

describe("testing the render of account component", () => {


      it("accepts user account props", ()=> {
      const wrapper = mount(<Account profile={user}/>);
      expect(wrapper.props().profile).toEqual(user);
    });


    it("contains users account email", () => {
      const wrapper = mount(<Account profile={user}/>);
      const email = wrapper.find("p").text()
      expect(email).toEqual("example.com")
    })


})



