it('should return false', () => {
    const component = new GridCheckboxComponent();
    const params = {};

    const result = component.refresh(params);

    expect(result).toBe(false);
});

it('should initialize params property with provided parameters', () => {
    const component = new GridCheckboxComponent();
    const params = { column: { colId: 'columnId' } };
    component.agInit(params);
    expect(component.params).toBe(params);
});

it('should set the default value for the specified column in the node', () => {
    const component = new GridCheckboxComponent();
    const params = {
        column: { colId: 'columnId' },
        node: {
            setDefaultValue: jest.fn()
        }
    };
    const event = { target: { checked: true } };
    
    component.params = params;
    component.checkHandler(event);

    expect(params.node.setDefaultValue).toHaveBeenCalledWith('columnId', true);
});

it('should prevent the default event behavior', () => {
    const component = new GridCheckboxComponent();
    const event = { target: { checked: true }, preventDefault: jest.fn() };
    
    component.checkHandler(event);

    expect(event.preventDefault).toHaveBeenCalled();
});

