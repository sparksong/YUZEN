import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import { grey } from '@material-ui/core/colors';

const ArrowDiv = () => {
	return (
		<a className="arrow" href="#about">
        	<ArrowDropDownCircleOutlinedIcon style={{ color: grey[50], fontSize: 80 }}/>
		</a>
	)
}

export default ArrowDiv