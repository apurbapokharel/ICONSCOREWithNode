import IconService, { IconAmount, IconConverter, HttpProvider, IconWallet, IconBuilder, SignedTransaction } from 'icon-sdk-js';
import MockData from './mockData/index.js';

const provider = new HttpProvider(MockData.NODE_URL);

const iconService = new IconService(provider);


