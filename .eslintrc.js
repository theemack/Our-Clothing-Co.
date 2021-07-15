module.exports = {
  env: { browser: true, node: true },
  root: true,
  parser: "babel-eslint",
  plugins: ["jsx-a11y", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  rules: {
    /*   
		 https://github.com/yannickcr/eslint-plugin-react/issues/2777#issuecomment-683944481
	       */
    "react/prop-types": "off",
  },
};
