import React from 'react';
// import { Link } from 'react-router-dom';
import { Button, styled, Box } from "@mui/material";


const ButtonContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    background: '#5A96E3'
});

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: '4px',
}));

const StudentButton = styled(StyledButton)({
    backgroundColor: '#007bff',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#0069d9',
        opacity: 0.8,
    },
});

const WardenButton = styled(StyledButton)({
    backgroundColor: '#28a745',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#218838',
        opacity: 0.8,
    },
});

const FacultyButton = styled(StyledButton)({
    backgroundColor: '#dc3545',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#c82333',
        opacity: 0.8,
    },
});

const Header = styled(Box)`
    text-align: center;
    background: #A1C2F1;
    
`;

const Front = styled(Box)`
    margin-top: 0 !important;
`;

function HomePage() {
    return (
        <Front>
            <Header style={{ height: '30vh' }}>
                <h1 style={{ fontSize: '50px' }}>Welcome to VIT University</h1>
                <h2 style={{ fontSize: '30px' }}>Hostel Managemnet System</h2>
            </Header>

            <ButtonContainer style={{ height: '70vh' }}>
                <StudentButton variant="contained">Student</StudentButton>

                <WardenButton variant="contained">Warden</WardenButton>

                <FacultyButton variant="contained">Faculty</FacultyButton>
            </ButtonContainer>
        </Front>
    );
}

export default HomePage;