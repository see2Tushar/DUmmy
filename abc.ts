import { GridCheckboxComponent } from './GridCheckboxComponent';

describe('GridCheckboxComponent', () => {
  let component: GridCheckboxComponent;

  beforeEach(() => {
    component = new GridCheckboxComponent();
  });

  describe('agInit', () => {
    it('should initialize params property with provided parameters', () => {
      const params = { column: { colId: 'columnId' } };
      component.agInit(params);
      expect(component.params).toBe(params);
    });
  });

  describe('checkHandler', () => {
    it('should set the default value for the specified column in the node', () => {
      const params = {
        column: { colId: 'columnId' },
        node: {
          setDefaultValue: jasmine.createSpy('setDefaultValue')
        }
      };
      const event = { target: { checked: true } };

      component.params = params;
      component.checkHandler(event);

      expect(params.node.setDefaultValue).toHaveBeenCalledWith('columnId', true);
    });

    it('should prevent the default event behavior', () => {
      const event = { target: { checked: true }, preventDefault: jasmine.createSpy('preventDefault') };

      component.checkHandler(event);

      expect(event.preventDefault).toHaveBeenCalled();
    });
  });

  describe('refresh', () => {
    it('should return false', () => {
      const params = {};

      const result = component.refresh(params);

      expect(result).toBe(false);
    });
  });
});
