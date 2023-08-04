const VALIDATION_STRINGS: Record<
  string,
  (label: string, value?: number | string) => string
> = {
  REQUIRED: (label) => `${label} الزامی می باشد`,
  LENGTH: (label, value) => `${label} باید ${value?.toString()} رقمی باشد`,
  MINIMUM: (label, value) => `${label} باید بیشتر از ${value} رقمی باشد`,
  MAXIMUM: (label, value) => `${label} باید کمتر از ${value} رقمی باشد`,
};

export default VALIDATION_STRINGS;
