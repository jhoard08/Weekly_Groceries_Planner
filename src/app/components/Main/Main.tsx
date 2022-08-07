import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Checkbox
} from '@chakra-ui/react';
import Searchbar from '../Searchbar/Searcbar';
import { IRecipe, fakeRecipeData } from '../../../lib/constants/config';
import { useEffect, useState } from 'react';

const Main: React.FC = () => {
    const [recipe, setRecipe] = useState<IRecipe[]>([]);

    useEffect(() => {
        getRecipeData();
    }, [recipe]);

    const getRecipeData = () => {
        setRecipe(fakeRecipeData);
    };

    return (
        <div>
            <Searchbar></Searchbar>
            <TableContainer mt={10}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Export List</Th>
                            <Th textAlign={'center'}>Favorite</Th>
                            <Th textAlign={'center'}>Recipe Name</Th>
                            <Th textAlign={'center'}>Approved for Remake</Th>
                            <Th isNumeric>Last Day Since Meal</Th>
                        </Tr>
                    </Thead>
                    {recipe.map(value => (
                        <Tbody>
                            <Tr key={value.id}>
                                <Td pl={10}>
                                    <Checkbox />
                                </Td>
                                {value.favorite ? (
                                    <Td textAlign={'center'}>
                                        <i className="fa-solid fa-star"></i>
                                    </Td>
                                ) : (
                                    <Td textAlign={'center'}>
                                        <i className="fa-regular fa-star"></i>
                                    </Td>
                                )}
                                <Td textAlign={'center'}>{value.name}</Td>
                                {value.remake ? (
                                    <Td textAlign={'center'}>
                                        <i className="fa-solid fa-check"></i>
                                    </Td>
                                ) : (
                                    <Td textAlign={'center'}>
                                        <i className="fa-solid fa-x"></i>
                                    </Td>
                                )}
                                <Td isNumeric>{value.lastMeal}</Td>
                            </Tr>
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        </div>
    );
};

export default Main;
