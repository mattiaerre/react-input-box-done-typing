import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import InputBoxDoneTyping from './InputBoxDoneTyping';

chai.should();
chai.use(sinonChai);

describe('<InputBoxDoneTyping />', () => {
  it('should be an input element', () => {
    const props = {
      inputDoneTyping: sinon.spy()
    };

    const wrapper = shallow(<InputBoxDoneTyping {...props} />);

    const actual = wrapper.type();
    const expected = 'input';

    expect(actual).to.equal(expected);
  });

  it('should handle change', () => {
    const props = {
      inputOnChange: sinon.spy(),
      inputDoneTyping: sinon.spy()
    };

    const wrapper = shallow(<InputBoxDoneTyping {...props} />);

    props.inputOnChange.should.not.have.been.called;
    wrapper.simulate('change', { target: { value: 'lon' } });
    expect(props.inputOnChange).to.have.been.calledWith('lon');
  });

  it('should notify done typing', () => {
    const props = {
      inputDoneTyping: sinon.spy()
    };

    const wrapper = shallow(<InputBoxDoneTyping {...props} />);

    props.inputDoneTyping.should.not.have.been.called;
    wrapper.simulate('keyup', { target: { value: 'lon' } });
    expect(props.inputDoneTyping).to.have.been.calledWith('lon');
  });
});