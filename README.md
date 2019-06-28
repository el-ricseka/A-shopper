# vue-truffle

## Project setup
Ensure that ganache and ipfs are installed locally. Also ensure that [CORS](https://github.com/ipfs/js-ipfs-http-client) is configured for IPFS
###install node modules 
```
npm install
```
###Start IPFS Daemon
Ensure that its running on port 8080
```
ipfs daemon
```
###Start Ganache and import accounts into metamask

```
ganache-cli
```
### Start development server
```
npm run serve
```

### Run truffle tests
```
truffle test
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
