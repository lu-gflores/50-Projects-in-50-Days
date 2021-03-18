const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Maya Smith',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium deleniti adipisci dolore similique veritatis perspiciatis accusamus molestias suscipit quod doloremque aut, sunt ab? Aliquam facere accusantium omnis perferendis et!"
    },
    {
        name: 'John Adams',
        position: 'Developer',
        photo: 'https://randomuser.me/api/portraits/men/46.jpg',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore reprehenderit cumque quod eum at ex dolore magnam inventore similique, incidunt deserunt ipsam, nostrum quasi quisquam, quo deleniti porro repellendus impedit voluptatum mollitia vero voluptatibus possimus! Iusto voluptatum nam dignissimos qui pariatur reiciendis doloribus exercitationem!
        `
    },
    {
        name: 'Samantha Reynolds',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/23.jpg',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis placeat nostrum corrupti aliquam voluptatum distinctio blanditiis, aut exercitationem sunt consequatur, ab temporibus voluptate, animi laudantium neque doloremque ut laboriosam.
        `
    },
    {
        name: 'Eric Stevens',
        position: 'UX/UI Designer',
        photo: 'https://randomuser.me/api/portraits/men/53.jpg',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem dignissimos deserunt aut magnam nulla dolor quasi perspiciatis numquam nesciunt aliquam incidunt vitae accusantium earum, quas maiores asperiores ratione unde odio. Provident, porro!
        `
    }
]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if (idx > testimonials.length - 1) {
        idx = 0
    }
}
setInterval(updateTestimonial, 10000)