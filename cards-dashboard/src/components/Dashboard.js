import React from 'react';
import Card from './Card';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <Card cardDetails = "Something that can be repeated multiple times is not something that instantly becomes your lorem ipsum." imageProvider = "Syuhei Inoue" title = "What a show" />
                <Card cardDetails = "Something that can be repeated multiple times is not something that instantly becomes your lorem ipsum." imageProvider = "Someone" title = "A marvellous one" />
                <Card cardDetails = "Something that can be repeated multiple times is not something that instantly becomes your lorem ipsum." imageProvider = "Someone from unsplash" title = "There is Love" />
                <Card cardDetails = "Something that can be repeated multiple times is not something that instantly becomes your lorem ipsum." imageProvider = "Someone from unsplash" title = "Right vs Right" />
                <Card cardDetails = "Something that can be repeated multiple times is not something that instantly becomes your lorem ipsum." imageProvider = "Someone from unsplash" title = "Bring your hate" />
                <Card cardDetails = "Something that can be repeated multiple times is not something that instantly becomes your lorem ipsum." imageProvider = "Someone from unsplash" title = "Cash your envy" />
                <Card cardDetails = "Something that can be repeated multiple times is not something that instantly becomes your lorem ipsum." imageProvider = "Someone from unsplash" title = "Voyeurism" />
                <Card cardDetails = "Something that can be repeated multiple times is not something that instantly becomes your lorem ipsum." imageProvider = "Someone from unsplash" title = "Kill someone to show you care" />
                <Card imageProvider = "Someone from unsplash" title = "Never again will I love" />
                <Card imageProvider = "Someone from unsplash" title = "Grow into your worst self" />
            </div>
        )
    }
}

export default Dashboard;