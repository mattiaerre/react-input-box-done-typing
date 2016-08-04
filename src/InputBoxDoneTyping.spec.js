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
      defaultValue: typing.lon,
      onChange: sinon.spy(),
      doneTyping: sinon.spy(),
      doneTypingInterval: 5
    };

    wrapper = shallow(<InputBoxDoneTyping {...props} />);

    clock = sinon.useFakeTimers();
  });

  it('should be an input element', () => {
    const actual = wrapper.type();
    actual.should.equal('input');
  });

  it('should handle change', () => {
    props.onChange.should.not.have.been.called;
    wrapper.simulate('change', { target: { value: typing.lon } });
    props.onChange.should.have.been.calledWith(typing.lon);
  });

  it('should notify done typing', () => {
    props.doneTyping.should.not.have.been.called;
    wrapper.simulate('keyup', { target: { value: typing.lond } });
    clock.tick(10);
    props.doneTyping.should.have.been.calledWith(typing.lond);
  });

  afterEach(() => {
    clock.restore();
  });
});