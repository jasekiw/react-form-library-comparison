# React Form Libraries Performance Comparison

This project demonstrates and compares the performance characteristics of three popular React form libraries:
- React Hook Form
- Tanstack Form (formerly React Hook Form)
- Formik

## Performance Results

### React Hook Form
- ✅ Achieves input-isolated renders (only the changed input re-renders)
- ✅ Minimal re-renders (only 1 render on form initialization)
- ✅ Excellent performance with large forms
- ✅ Works well with both controlled and uncontrolled inputs

### Tanstack Form
- ❌ Fails to maintain input-isolated renders when a validation schema is provided
- ⚠️ Requires careful configuration to achieve optimal performance
- ✅ Good TypeScript support

### Formik
- ❌ Re-renders the entire form on any input change
- ⚠️ Performance issues with large forms
- ✅ Simple API and good documentation

## Run Project

```
pnpm install
pnpm run dev
```
