import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 10,
    },
    todoLine: {
        borderWidth: 1,
        borderBlockColor: 'black',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        borderRadius: 10,
        marginVertical: 2,
    },
    todoLineTouch: {
        padding: 8,
        flexDirection: 'row',
        flex: 3,
    },
    textInput: {
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
        marginTop: 16,
    },
    titleText: {
        fontSize: 18,
        flex: 3,
    },
    header: {
        backgroundColor: 'rgba(30, 144, 255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    headerText: {
        fontSize: 24,
        alignSelf: 'center',
        paddingVertical: 5,
    },
    buttons: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
    }
})

export default styles;