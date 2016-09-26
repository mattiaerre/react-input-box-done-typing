import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import InputBoxDoneTyping from '../src/InputBoxDoneTyping';

chai.should();
chai.use(sinonChai);

describe('<InputBoxDoneTyping />', () => {
  let props;
  let wrapper;
  let clock;

  const typing = { l: 'l', lo: 'lo', lon: 'lon', lond: 'lond' };

  beforeEach(() => {
    props = {
      defaultValue: typing.lon,
      onChange: sinon.spy(),
      doneTyping: sinon.spy(),
      doneTypingInterval: 5,
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
    wrapper.simulate('keydown', { target: { value: typing.l } });
    wrapper.simulate('keyup', { target: { value: typing.l } });
    clock.tick(1);
    wrapper.simulate('keydown', { target: { value: typing.lo } });
    wrapper.simulate('keyup', { target: { value: typing.lo } });
    clock.tick(1);
    wrapper.simulate('keydown', { target: { value: typing.lon } });
    wrapper.simulate('keyup', { target: { value: typing.lon } });
    clock.tick(1);
    wrapper.simulate('keydown', { target: { value: typing.lond } });
    wrapper.simulate('keyup', { target: { value: typing.lond } });
    clock.tick(5);
    props.doneTyping.should.have.been.calledWith(typing.lond);
  });

  afterEach(() => {
    clock.restore();
  });
});
