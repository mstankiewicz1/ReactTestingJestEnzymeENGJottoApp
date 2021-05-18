import checkPropTypes from 'check-prop-types';

export default findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.prosTypes, 
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}; 