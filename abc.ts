providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ThreeWayToggleComponent),
    multi: true
  }
]

implements ControlValueAccessor

private onChange: (value: any) => void;
private onTouched: () => void;

writeValue(value: any): void {
  this.toggleValue = value;
}

registerOnChange(fn: (value: any) => void): void {
  this.onChange = fn;
}

registerOnTouched(fn: () => void): void {
  this.onTouched = fn;
}

setDisabledState(isDisabled: boolean): void {
  // Optional: Implement if you want to handle disabling of the component
}

onToggleChange(value: string) {
  this.toggleValue = value;
  if (this.onChange) {
    this.onChange(value);
  }
  if (this.onTouched) {
    this.onTouched();
  }
}
