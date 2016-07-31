import React from 'react';
import {shallow} from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import InputBoxDoneTyping from './InputBoxDoneTyping';

chai.should();
chai.use(sinonChai);

describe('<InputBoxDoneTyping />', () => {
  let props;
  let wrapper;
  let clock;

  const typing = { lon: 'lon', lond: 'lond' }

  beforeEach(() => {
    props = {
      doneTypingInterval: 5,
      inputDoneTyping: sinon.spy(),
      inputOnChange: sinon.spy(),
      inputDefaultValue: typing.lon
    };

    wrapper = shallow(<InputBoxDoneTyping {...props} />);

    clock = sinon.useFakeTimers();
  });

  it('should be an input element', () => {
    const actual = wrapper.type();
    actual.should.equal('input');
  });

  it('should handle change', () => {
    props.inputOnChange.should.not.have.been.called;
    wrapper.simulate('change', { target: { value: typing.lon } });
    props.inputOnChange.should.have.been.calledWith(typing.lon);
  });

  it('should notify done typing', () => {
    props.inputDoneTyping.should.not.have.been.called;
    wrapper.simulate('keyup', { target: { value: typing.lond } });
    clock.tick(10);
    props.inputDoneTyping.should.have.been.calledWith(typing.lond);
  });

  it('shouldn\'t notify done typing if user input doesn\'t change', () => {
    props.inputDoneTyping.should.not.have.been.called;
    wrapper.simulate('keyup', { target: { value: typing.lon } });
    clock.tick(10);
    props.inputDoneTyping.should.not.have.been.calledWith(typing.lon);
  });

  it('shouldn\'t notify done typing if user input changes capitalisation only', () => {
    props.inputDoneTyping.should.not.have.been.called;
    wrapper.simulate('keyup', { target: { value: typing.lon.toUpperCase() } });
    clock.tick(10);
    props.inputDoneTyping.should.not.have.been.calledWith(typing.lon);
  });

  afterEach(() => {
    clock.restore();
  });
});