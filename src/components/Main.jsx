import React from 'react';
import Constants from 'expo-constants';
import {Text, View} from 'react-native';
import RepositoryList from './RepositoryList';
import { Routes, Navigate, Route} from 'react-router-native';

const Main = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<Text>Sign In</Text>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </View>
    )
}

export default Main