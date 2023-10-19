<div
className="flex items-center space-x-2"
onClick={() => {
  setRememberme(!rememberme);
  if (rememberme) {
    localStorage.removeItem("formData");
  }
}}
>
<Toggle size="sm" variant="outline">
  {rememberme ? <Check className="h-3 w-3" /> : null}
</Toggle>
<label
  htmlFor="rememberme"
  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
>
  Remember me
</label>
